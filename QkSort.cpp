#include <iostream>
using namespace std;
int part(int arr[], int low, int high)
{
    int pv = arr[low];
    int i = low + 1;
    int j = high;
    int temp;

    do
    {
        while (arr[i] < pv)
        {
            i++;
        }

        while (arr[j] > pv)
        {
            j--;
        }

        if (i < j)
        {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    } while (i < j);
    temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}

void QkSort(int arr[], int low, int high)
{
    int pv;
    if (low < high)
    {
        pv = part(arr, low, high);
        QkSort(arr, low, pv - 1);
        QkSort(arr, pv + 1, high);
    }
}
int main()
{
    int arr[] = {14, 23, 22, 11, 15};
    int n = sizeof(arr) / sizeof(arr[0]);
    QkSort(arr, 0, n - 1);

    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << "\t";
    }
    return 0;
}