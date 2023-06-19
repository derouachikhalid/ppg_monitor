import {
    StyleSheet,
    TextInput,
  } from "react-native";
  import React, { useState } from "react";

  
  const AppTextInput= ({ ...otherProps }) => {
    const [focused, setFocused] = useState(false);
    return (
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={"#1f41bb55"}
        style={[
          {
            fontSize: 20,
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginVertical: 10,
          },
          focused && {
            borderWidth: 1,
            borderColor: "#1f41bb",
            shadowOffset: { width: 15, height: 20 },
            shadowColor: "#1f41bb",
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
        ]}
        {...otherProps}
      />
    );
  };
  
  export default AppTextInput;
  
  const styles = StyleSheet.create({});