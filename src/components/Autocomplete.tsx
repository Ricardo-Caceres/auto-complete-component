import React, { SetStateAction, useState } from "react";
import { AutocompleteProps } from "../interfaces/AutocompleteProps";

export const Autocomplete = ({ suggestions }: AutocompleteProps) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  /* The onChange function is a function that takes an event as an argument and returns nothing.
  The event is a ChangeEvent that has a target property that is an object with a value property that
  is a
  SetStateAction that is a string. */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;

    /* Filtering the suggestions array to only include the suggestions that match the user input. */
    const unLinked = suggestions.filter(
      (suggestion: string) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  /**
   * OnClick is a function that takes an event as an argument and returns nothing. The event is a
   * MouseEventHandler that has a target property that is an object with an innerText property that is a
   * SetStateAction that is a string.
   * @param e - React.MouseEventHandler<HTMLLIElement> & {
   */
  const onClick = (
    e: React.MouseEventHandler<HTMLLIElement> & {
      target: { innerText: React.SetStateAction<string> };
    }
  ): void => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  /**
   * If the user presses the enter key, set the input to the active suggestion. If the user presses the
   * up arrow key, decrement the active suggestion index. If the user presses the down arrow key,
   * increment the active suggestion index
   * @param e - { keyCode: number } - This is the event object that is passed to the onKeyDown function.
   * @returns return (
   *     <div className="search">
   *       <input
   *         type="text"
   *         onChange={onChange}
   *         onKeyDown={onKeyDown}
   *         value={input}
   *       />
   *       {showSuggestions && (
   *         <ul>
   *           {filteredSuggestions.map((suggestion, index) =>
   */

  /**
   * If the user presses the enter key, set the input to the active suggestion. If the user presses the
   * up arrow key, decrement the active suggestion index. If the user presses the down arrow key,
   * increment the active suggestion index
   * @param e - { keyCode: number } - This is the event object that is passed to the function. We're
   * only interested in the keyCode property.
   * @returns return (
   *     <div className="search">
   *       <input
   *         type="text"
   *         onChange={onChange}
   *         onKeyDown={onKeyDown}
   *         value={input}
   *       />
   *       {showSuggestions && input.length > 0 && (
   *         <ul>
   *           {filteredSuggestions.map((
   */
  const onKeyDown = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      setInput(filteredSuggestions[activeSuggestionIndex]);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    } else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  /**
   * If there are suggestions, render a list of suggestions, otherwise render a message saying there
   * are no suggestions
   */
  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className='suggestions'>
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }

          return (
            <li className={className} key={suggestion}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className='no-suggestions'>
        <em>Not Found</em>
      </div>
    );
  };

  return (
    <>
      <input
        type='text'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </>
  );
};
