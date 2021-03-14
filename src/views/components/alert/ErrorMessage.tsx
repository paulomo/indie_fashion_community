import React from "react";

export interface ErrorProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorProps> = ({ message }: ErrorProps) => {
    return (
      <div className="error-message">
        <h1> Something went wrong </h1>  
        <p> {message} </p>
      </div>
    )
  }