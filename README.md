# HTML Issue Bot 9000

## Learning Goals

- Demonstrate writing valid HTML

## Introduction

Let's practice using the W3C's HTML Validator!

## Demonstrate Writing Valid HTML

In this lab we'll use the W3C Validator to make our invalid HTML happy! You
might need to change how you work this problem depending on your work
environment. Either way you'll learn to fix invalid HTML.

## Getting Started

**Fork and clone** this lesson into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

### Steps

1. Open index.html in a browser. See how it, well, doesn't look _quite_ right?
2. Open index.html in your text editor
3. Visit the W3C validator at:
   [http://validator.w3.org/#validate_by_input][validator]
4. Copy the code from index.html and paste it into the text area
5. Click the large "Check" button
6. Use the error messages to correct the code in your copy of `index.html`
7. Repeat steps 3-6 until the Html Validator reports: "Document checking
   completed. No errors or warnings to show."
8. Not only is the document now W3C-valid, it no longer looks weird

### Wrapping Up

When your document is valid, go to the terminal and type `npm test`. Since the
goal of this assignment is to practice verifying the HTML structure via W3C, the
test in this lab is only checking that an `index.html` file exists. Remember to
submit your work using CodeGrade when you're done!

## Resources

- [W3C HTML Validator - Validate Direct Input][validator]

[validator]: http://validator.w3.org/#validate_by_input
