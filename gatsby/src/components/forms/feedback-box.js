import React from "react";

export default function ValidationBox({
  feedbackList,
  hideFeedback,
  className,
}) {
  return (
    <div
      className={`absolute left-0 w-full bg-white border-8 p-4 text-center z-10 font-extrabold ${className}`}
    >
      <span
        role="button"
        tabIndex={0}
        className="absolute top-4 right-4 cursor-pointer"
        onClick={hideFeedback}
        onKeyDown={hideFeedback}
      >
        &#10006;
      </span>
      <ul>
        {feedbackList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// <div className={`absolute bottom-10 left-0 w-full bg-white border-8 p-4 text-center z-10 font-extrabold ${this.state.showFeedback  ? 'inline-block' : 'hidden'} ${this.state.hasErrors ? 'border-red-600' : 'border-green-600' }`}>
//     <span
//         role="button"
//         tabIndex={0}
//         className="absolute top-4 right-4 cursor-pointer"
//         onClick={this.hideFeedback}
//         onKeyDown={this.hideFeedback}>&#10006;</span>
//     <ul>{this.state.feedback.map( (item, index) => {
//         return <li key={index}>{item}</li>
//     })}</ul>
// </div>
