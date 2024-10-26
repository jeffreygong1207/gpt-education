import { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import cipherImage from "./assets/cipher.png"; // Adjust the path as necessary

const App = () => {
  const [step, setStep] = useState(0);
  const [registration, setRegistration] = useState({
    candidateName: "",
    id: "",
  });
  const [answers, setAnswers] = useState({
    encodedMessage: "",
    errors: "",
  });

  // Proceed to the next step
  const handleNextStep = () => {
    setStep(step + 1);
  };

  // Handle input changes for registration
  const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };

  // Handle input changes for the task
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  // Function to save data to the server
  const saveData = async () => {
    try {
      await axios.post("/api/save-data", {
        candidateName: registration.candidateName,
        id: registration.id,
        encodedMessage: answers.encodedMessage,
        errors: answers.errors,
      });
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Inline styles
  const containerStyle: React.CSSProperties = {
    display: "flex", // Flexbox layout
    flexDirection: "column", // Stack children vertically
    justifyContent: "center", // Center items vertically
    alignItems: "center", // Center items horizontally
    width: "600px", // Set the container width
    height: "100vh", // Full viewport height
    margin: "0 auto", // Center container horizontally
    textAlign: "center", // Center text within the container
    padding: "20px", // Optional padding for internal spacing
    boxSizing: "border-box", // Ensure padding is included in width/height calculations
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "1rem",
  };

  const inputStyle = {
    padding: "0.5rem",
    width: "100%",
    maxWidth: "300px",
    margin: "1rem 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const textareaStyle = {
    padding: "0.5rem",
    width: "100%",
    maxWidth: "300px",
    height: "100px",
    margin: "1rem 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  // Welcome Page
  const welcomePage = () => (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center" }}>Decipher Game</h1>{" "}
      {/* Centered title */}
      <p style={{ textAlign: "center" }}>
        {" "}
        {/* Centered paragraph */}
        Welcome to the decipher game. Please enter your name and ID to proceed.
      </p>
      <input
        style={inputStyle}
        type="text"
        name="candidateName"
        value={registration.candidateName}
        onChange={handleRegistrationChange}
        placeholder="Enter Name"
      />
      <input
        style={inputStyle}
        type="text"
        name="id"
        value={registration.id}
        onChange={handleRegistrationChange}
        placeholder="Enter ID"
      />
      <button style={buttonStyle} onClick={handleNextStep}>
        Proceed
      </button>
    </div>
  );

  // Display the task directions
  const displayDirections = () => (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Welcome! Here are the Directions</h2>{" "}
      {/* Centered title */}
      <p style={{ textAlign: "center" }}>
        {" "}
        {/* Centered paragraph */}
        This is the cipher for this task. Sentences, words will be coded using
        these rules. The encoded cypher may or may not be correct. It is up to
        you to determine whether the following prompts are correct or incorrect.
        First select whether the example is correct or incorrect, after that,
        select where in the text there letters out of place or use the text box
        to describe the error
      </p>
      <img
        src={cipherImage}
        alt="Cipher Alphabet"
        style={{ maxWidth: "100%", height: "auto" }}
      />{" "}
      {/* Added image of the cipher */}
      <button style={buttonStyle} onClick={handleNextStep}>
        Proceed to Practice
      </button>
    </div>
  );

  // Display the practice task
  const displayPractice1 = () => (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Practice Task 1</h2>{" "}
      {/* Centered title */}
      <img
        src={cipherImage}
        alt="Cipher Alphabet"
        style={{ maxWidth: "100%", height: "auto", margin: "1rem 0" }}
      />{" "}
      <p style={{ textAlign: "center" }}>
        {" "}
        {/* Centered paragraph */}
        Encoded Message: Gsfa fa yn mcyojqm lfjsmh, gk gmag gsm gyar fxmy! Dsyg
        xk ukt gsfnr?
      </p>
      {/* Added multiple choice question */}
      <div style={{ textAlign: "center" }}>
        <p>Is the cipher correct?</p>
        <label>
          <input
            type="radio"
            name="cipherCorrect"
            value="yes"
            onChange={handleInputChange} // Handle change for the radio button
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="cipherCorrect"
            value="no"
            onChange={handleInputChange} // Handle change for the radio button
          />
          No
        </label>
      </div>
      {/* Added image of the cipher */}
      <label style={{ textAlign: "center", display: "block" }}>
        {" "}
        {/* Centered label */}
        If there are errors, list them:
        <textarea
          style={textareaStyle}
          name="errors"
          value={answers.errors}
          onChange={handleTextAreaChange} // Updated to use a compatible handler
          placeholder="Describe the errors if any"
        />
      </label>
      <button
        style={buttonStyle}
        onClick={() => {
          saveData(); // Save data to the server when submitting the form
          handleNextStep();
        }}
      >
        Submit
      </button>
    </div>
  );

  const displayPractice2 = () => (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Practice Task 2</h2>{" "}
      {/* Centered title */}
      <img
        src={cipherImage}
        alt="Cipher Alphabet"
        style={{ maxWidth: "100%", height: "auto", margin: "1rem 0" }}
      />{" "}
      <p style={{ textAlign: "center" }}>
        {" "}
        {/* Centered paragraph */}
        Encoded Message: Gsfa fa yn mcyojqm lfjsmh, gk gmag gsm gyar fxmy! Dsyg
        xk ukt gsfnr?
      </p>
      {/* Added multiple choice question */}
      <div style={{ textAlign: "center" }}>
        <p>Is the cipher correct?</p>
        <label>
          <input
            type="radio"
            name="cipherCorrect"
            value="yes"
            onChange={handleInputChange} // Handle change for the radio button
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="cipherCorrect"
            value="no"
            onChange={handleInputChange} // Handle change for the radio button
          />
          No
        </label>
      </div>
      {/* Added image of the cipher */}
      <label style={{ textAlign: "center", display: "block" }}>
        {" "}
        {/* Centered label */}
        If there are errors, list them:
        <textarea
          style={textareaStyle}
          name="errors"
          value={answers.errors}
          onChange={handleTextAreaChange} // Updated to use a compatible handler
          placeholder="Describe the errors if any"
        />
      </label>
      <button
        style={buttonStyle}
        onClick={() => {
          saveData(); // Save data to the server when submitting the form
          handleNextStep();
        }}
      >
        Submit
      </button>
    </div>
  );

  const displayPracticeFinished = () => (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Congratulations!</h2>{" "}
      {/* Centered title */}
      <p style={{ textAlign: "center" }}>
        You have finished the practice session. Please click proceed to move on
        to the next session.
      </p>
      <button style={buttonStyle} onClick={handleNextStep}>
        Proceed
      </button>
    </div>
  );

  const displayTask1 = () => (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Task 1</h2> {/* Centered title */}
      <img
        src={cipherImage}
        alt="Cipher Alphabet"
        style={{ maxWidth: "100%", height: "auto", margin: "1rem 0" }}
      />
      <p style={{ textAlign: "center" }}>
        Encoded Message: [Your encoded message for Task 1 here]
      </p>
      <div style={{ textAlign: "center" }}>
        <p>Is the cipher correct?</p>
        <label>
          <input
            type="radio"
            name="cipherCorrectTask1"
            value="yes"
            onChange={handleInputChange} // Handle change for the radio button
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="cipherCorrectTask1"
            value="no"
            onChange={handleInputChange} // Handle change for the radio button
          />
          No
        </label>
      </div>
      <label style={{ textAlign: "center", display: "block" }}>
        If there are errors, list them:
        <textarea
          style={textareaStyle}
          name="errorsTask1"
          value={answers.errors}
          onChange={handleTextAreaChange} // Updated to use a compatible handler
          placeholder="Describe the errors if any"
        />
      </label>
      <button
        style={buttonStyle}
        onClick={() => {
          saveData(); // Save data to the server when submitting the form
          handleNextStep();
        }}
      >
        Submit
      </button>
    </div>
  );

  const displayTask2 = () => (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Task 2</h2> {/* Centered title */}
      <img
        src={cipherImage}
        alt="Cipher Alphabet"
        style={{ maxWidth: "100%", height: "auto", margin: "1rem 0" }}
      />
      <p style={{ textAlign: "center" }}>
        Encoded Message: [Your encoded message for Task 2 here]
      </p>
      <div style={{ textAlign: "center" }}>
        <p>Is the cipher correct?</p>
        <label>
          <input
            type="radio"
            name="cipherCorrectTask2"
            value="yes"
            onChange={handleInputChange} // Handle change for the radio button
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="cipherCorrectTask2"
            value="no"
            onChange={handleInputChange} // Handle change for the radio button
          />
          No
        </label>
      </div>
      <label style={{ textAlign: "center", display: "block" }}>
        If there are errors, list them:
        <textarea
          style={textareaStyle}
          name="errorsTask2"
          value={answers.errors}
          onChange={handleTextAreaChange} // Updated to use a compatible handler
          placeholder="Describe the errors if any"
        />
      </label>
      <button
        style={buttonStyle}
        onClick={() => {
          saveData(); // Save data to the server when submitting the form
          handleNextStep();
        }}
      >
        Submit
      </button>
    </div>
  );

  // Display the task for Task 3
  const displayTask3 = () => (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Task 3</h2> {/* Centered title */}
      <img
        src={cipherImage}
        alt="Cipher Alphabet"
        style={{ maxWidth: "100%", height: "auto", margin: "1rem 0" }}
      />
      <p style={{ textAlign: "center" }}>
        Encoded Message: [Your encoded message for Task 3 here]
      </p>
      <div style={{ textAlign: "center" }}>
        <p>Is the cipher correct?</p>
        <label>
          <input
            type="radio"
            name="cipherCorrectTask3"
            value="yes"
            onChange={handleInputChange} // Handle change for the radio button
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="cipherCorrectTask3"
            value="no"
            onChange={handleInputChange} // Handle change for the radio button
          />
          No
        </label>
      </div>
      <label style={{ textAlign: "center", display: "block" }}>
        If there are errors, list them:
        <textarea
          style={textareaStyle}
          name="errorsTask3"
          value={answers.errors}
          onChange={handleTextAreaChange} // Updated to use a compatible handler
          placeholder="Describe the errors if any"
        />
      </label>
      <button
        style={buttonStyle}
        onClick={() => {
          saveData(); // Save data to the server when submitting the form
          handleNextStep();
        }}
      >
        Submit
      </button>
    </div>
  );

  // Display the task for Task 4
  const displayTask4 = () => (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Task 4</h2> {/* Centered title */}
      <img
        src={cipherImage}
        alt="Cipher Alphabet"
        style={{ maxWidth: "100%", height: "auto", margin: "1rem 0" }}
      />
      <p style={{ textAlign: "center" }}>
        Encoded Message: [Your encoded message for Task 4 here]
      </p>
      <div style={{ textAlign: "center" }}>
        <p>Is the cipher correct?</p>
        <label>
          <input
            type="radio"
            name="cipherCorrectTask4"
            value="yes"
            onChange={handleInputChange} // Handle change for the radio button
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="cipherCorrectTask4"
            value="no"
            onChange={handleInputChange} // Handle change for the radio button
          />
          No
        </label>
      </div>
      <label style={{ textAlign: "center", display: "block" }}>
        If there are errors, list them:
        <textarea
          style={textareaStyle}
          name="errorsTask4"
          value={answers.errors}
          onChange={handleTextAreaChange} // Updated to use a compatible handler
          placeholder="Describe the errors if any"
        />
      </label>
      <button
        style={buttonStyle}
        onClick={() => {
          saveData(); // Save data to the server when submitting the form
          handleNextStep();
        }}
      >
        Submit
      </button>
    </div>
  );

  // Display the task for Task 5
  const displayTask5 = () => (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Task 5</h2> {/* Centered title */}
      <img
        src={cipherImage}
        alt="Cipher Alphabet"
        style={{ maxWidth: "100%", height: "auto", margin: "1rem 0" }}
      />
      <p style={{ textAlign: "center" }}>
        Encoded Message: [Your encoded message for Task 5 here]
      </p>
      <div style={{ textAlign: "center" }}>
        <p>Is the cipher correct?</p>
        <label>
          <input
            type="radio"
            name="cipherCorrectTask5"
            value="yes"
            onChange={handleInputChange} // Handle change for the radio button
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="cipherCorrectTask5"
            value="no"
            onChange={handleInputChange} // Handle change for the radio button
          />
          No
        </label>
      </div>
      <label style={{ textAlign: "center", display: "block" }}>
        If there are errors, list them:
        <textarea
          style={textareaStyle}
          name="errorsTask5"
          value={answers.errors}
          onChange={handleTextAreaChange} // Updated to use a compatible handler
          placeholder="Describe the errors if any"
        />
      </label>
      <button
        style={buttonStyle}
        onClick={() => {
          saveData(); // Save data to the server when submitting the form
          handleNextStep();
        }}
      >
        Submit
      </button>
    </div>
  );

  // Display the congratulations page
  const displayCongrats = () => (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Congratulations!</h2>{" "}
      {/* Centered title */}
      <p style={{ textAlign: "center" }}>
        Thank you! You have finished the test.
      </p>
      <button style={buttonStyle} onClick={() => setStep(0)}>
        Back to Welcome Page
      </button>
    </div>
  );

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    // Handle the change event here
    // For example, update state or perform validation
  };

  return (
    <div>
      {step === 0 && welcomePage()}
      {step === 1 && displayDirections()}
      {step === 2 && displayPractice1()}
      {step === 3 && displayPractice2()}
      {step === 4 && displayPracticeFinished()}
      {step === 5 && displayTask1()}
      {step === 6 && displayTask2()}
      {step === 7 && displayTask3()}
      {step === 8 && displayTask4()}
      {step === 9 && displayTask5()}
      {step === 10 && displayCongrats()}
    </div>
  );
};

export default App;
