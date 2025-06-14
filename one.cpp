// FunProgram.cpp
#include <iostream>
using namespace std;

int main() {
    // Welcome message
    cout << "==========================" << endl;
    cout << "  Welcome to Fun Program!" << endl;
    cout << "==========================" << endl;

    // Ask user's name
    string name;
    cout << "What's your name? ";
    cin >> name;

    cout << "Hello, " << name << "! Let's play a math game!" << endl;

    // Ask for two numbers
    int num1, num2;
    cout << "Enter your first favorite number: ";
    cin >> num1;

    cout << "Enter your second favorite number: ";
    cin >> num2;

    // Show math results
    cout << "Great! Let's do some math with " << num1 << " and " << num2 << "!" << endl;
    cout << "Addition: " << num1 + num2 << endl;
    cout << "Subtraction: " << num1 - num2 << endl;
    cout << "Multiplication: " << num1 * num2 << endl;

    if (num2 != 0) {
        cout << "Division: " << num1 / num2 << endl;
    } else {
        cout << "Can't divide by zero!" << endl;
    }

    cout << "Thanks for playing, " << name << "! Goodbye!" << endl;

    return 0;
}
