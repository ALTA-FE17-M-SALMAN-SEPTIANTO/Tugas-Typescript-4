/** @format */

interface Karyawan {
  id: number;
  nama: string;
}

const dataKaryawan: Karyawan[] = [
  { id: 101, nama: "rani" },
  { id: 203, nama: "andi" },
  { id: 305, nama: "budi" },
  { id: 410, nama: "cindy" },
  { id: 520, nama: "dodi" },
  { id: 635, nama: "eka" },
  { id: 742, nama: "fani" },
];

function binarySearch(arr: Karyawan[], targetId: number): Karyawan | null {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const currentId = arr[mid].id;

    if (currentId === targetId) {
      return arr[mid];
    } else if (currentId < targetId) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
}

const targetId = 520;
const hasilPencarian = binarySearch(dataKaryawan, targetId);

if (hasilPencarian) {
  console.log(
    `Karyawan dengan ID ${targetId} ditemukan: ${hasilPencarian.nama}`
  );
} else {
  console.log(`Karyawan dengan ID ${targetId} tidak ditemukan.`);
}

console.log(binarySearch)