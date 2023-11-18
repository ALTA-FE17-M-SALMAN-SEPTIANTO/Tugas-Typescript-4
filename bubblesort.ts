function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements if they are in the wrong order
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  // Test Case
  const nilaiMahasiswa: number[] = [80, 65, 90, 75, 85, 70, 95, 60];
  const nilaiTerurut: number[] = bubbleSort([...nilaiMahasiswa]);
  
  console.log("Input: ", nilaiMahasiswa);
  console.log("Output: ", nilaiTerurut);
  