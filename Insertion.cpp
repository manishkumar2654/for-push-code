#include <iostream>
using namespace std;

void Insertion(int arr[], int size)
{

    for (int i = 1; i < size; i++)
    {
        int mins = i;

        while (mins > 0 && arr[mins] < arr[mins - 1])
        {
            int sw = arr[mins];
            arr[mins] = arr[mins - 1];
            arr[mins - 1] = sw;
            mins--;
        }

    }
}

int main()
{
    int arr[] = {5, 4, 6, 2, 1};

    int size = sizeof(arr) / sizeof(arr[0]);

    Insertion(arr, size);
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << "\t";
    }
    return 0;
}