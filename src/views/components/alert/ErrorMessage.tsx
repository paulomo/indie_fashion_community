import React from "react";

export interface ErrorProps {
  error: any;
}

export const ErrorMessage: React.FC<ErrorProps> = ({ error }: ErrorProps) => {
    return (
      <div className="w-full bg-red-400 text-gray-600 text-center font-semibold">
        <h1> Something went wrong </h1>  
        <p> {error.essage} </p>
      </div>
    )
  }