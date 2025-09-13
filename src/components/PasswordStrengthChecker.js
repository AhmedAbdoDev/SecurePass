"use client";
import { getBarColor, getStrengthText } from "@/utils/functions";
import { useState } from "react";
import zxcvbn from "zxcvbn";

function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState({ warning: "", suggestions: [] });

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const result = zxcvbn(newPassword);
    setStrength(result.score * 25);
    setFeedback(result.feedback);
  };
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Password Strength Checker
        </h1>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={handlePasswordChange}
        />

        <div className="mt-4">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className={`h-full rounded-full transition-all duration-300 ${getBarColor(
                strength
              )}`}
              style={{ width: `${strength}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-2 text-sm text-gray-600 text-center">
          {getStrengthText(strength)}
        </div>
        {password.length > 0 && feedback.suggestions.length > 0 && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Suggestions:
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {feedback.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordStrengthChecker;
