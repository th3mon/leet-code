/**
 * CyclicRotation - Codility Lesson 2
 *
 * Przesuń wszystkie elementy tablicy A o K pozycji
 * w prawo. Elementy wychodzące poza koniec tablicy
 * wracają na jej początek.
 *
 * Przykład:
 * A = [3, 8, 9, 7, 6], K = 3
 * Wynik: [9, 7, 6, 3, 8]
 *
 * Ograniczenia:
 * 0 <= N <= 100
 * 0 <= K <= 100
 * -1000 <= A[i] <= 1000
 *
 * W tym zadaniu skupiamy się na poprawności.
 */

function solution(A: number[], K: number): number[] {
  const noRotations = K === 0;
  const isEmptyOrOneElement = A.length <= 1;
  if (noRotations || isEmptyOrOneElement) return A;
  
  K = K % A.length;
  
  if (K === 0) return A;
    
  const last = A.slice(-K);
  const first = A.slice(0, -K);
  
  return [...last, ...first];
}

// =============================================
// TEST CASES
// =============================================

interface TestCase {
  name: string;
  input: number[];
  k: number;
  expected: number[];
}

const tests: TestCase[] = [
  // --- Przykłady Codility ---
  {
    name: "Przykład Codility - K = 3",
    input: [3, 8, 9, 7, 6],
    k: 3,
    expected: [9, 7, 6, 3, 8],
  },
  {
    name: "Przykład Codility - identyczne elementy",
    input: [0, 0, 0],
    k: 1,
    expected: [0, 0, 0],
  },
  {
    name: "Przykład Codility - pełny obrót",
    input: [1, 2, 3, 4],
    k: 4,
    expected: [1, 2, 3, 4],
  },

  // --- Podstawowe przypadki ---
  {
    name: "Rotacja o jedną pozycję",
    input: [1, 2, 3, 4, 5],
    k: 1,
    expected: [5, 1, 2, 3, 4],
  },
  {
    name: "Rotacja o dwie pozycje",
    input: [1, 2, 3, 4, 5],
    k: 2,
    expected: [4, 5, 1, 2, 3],
  },
  {
    name: "Rotacja o trzy pozycje",
    input: [1, 2, 3, 4, 5],
    k: 3,
    expected: [3, 4, 5, 1, 2],
  },
  {
    name: "Brak rotacji",
    input: [1, 2, 3, 4, 5],
    k: 0,
    expected: [1, 2, 3, 4, 5],
  },
  {
    name: "Dwa elementy - jedna rotacja",
    input: [1, 2],
    k: 1,
    expected: [2, 1],
  },
  {
    name: "Dwa elementy - dwie rotacje",
    input: [1, 2],
    k: 2,
    expected: [1, 2],
  },
  {
    name: "Trzy elementy - dwie rotacje",
    input: [10, 20, 30],
    k: 2,
    expected: [20, 30, 10],
  },

  // --- Przypadki brzegowe ---
  {
    name: "Pusta tablica - K = 0",
    input: [],
    k: 0,
    expected: [],
  },
  {
    name: "Pusta tablica - K = 5",
    input: [],
    k: 5,
    expected: [],
  },
  {
    name: "Pusta tablica - K = 100",
    input: [],
    k: 100,
    expected: [],
  },
  {
    name: "Jeden element - K = 0",
    input: [42],
    k: 0,
    expected: [42],
  },
  {
    name: "Jeden element - K = 1",
    input: [42],
    k: 1,
    expected: [42],
  },
  {
    name: "Jeden element - K = 100",
    input: [42],
    k: 100,
    expected: [42],
  },
  {
    name: "K większe od długości tablicy",
    input: [1, 2, 3],
    k: 5,
    expected: [2, 3, 1],
  },
  {
    name: "K wielokrotnością długości",
    input: [1, 2, 3, 4],
    k: 8,
    expected: [1, 2, 3, 4],
  },
  {
    name: "K = 100 i pięć elementów",
    input: [1, 2, 3, 4, 5],
    k: 100,
    expected: [1, 2, 3, 4, 5],
  },
  {
    name: "K = 100 i trzy elementy",
    input: [1, 2, 3],
    k: 100,
    expected: [3, 1, 2],
  },

  // --- Wartości specjalne ---
  {
    name: "Liczby ujemne",
    input: [-1, -2, -3, -4],
    k: 1,
    expected: [-4, -1, -2, -3],
  },
  {
    name: "Liczby dodatnie i ujemne",
    input: [-5, 10, -15, 20],
    k: 2,
    expected: [-15, 20, -5, 10],
  },
  {
    name: "Wszystkie elementy identyczne",
    input: [7, 7, 7, 7, 7],
    k: 3,
    expected: [7, 7, 7, 7, 7],
  },
  {
    name: "Powtarzające się wartości",
    input: [1, 2, 1, 2, 3],
    k: 2,
    expected: [2, 3, 1, 2, 1],
  },
  {
    name: "Minimalne i maksymalne wartości",
    input: [-1000, 0, 1000],
    k: 1,
    expected: [1000, -1000, 0],
  },

  // --- Większe tablice ---
  {
    name: "10 elementów - K = 3",
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    k: 3,
    expected: [8, 9, 10, 1, 2, 3, 4, 5, 6, 7],
  },
  {
    name: "20 elementów - K = 7",
    input: Array.from({ length: 20 }, (_, i) => i + 1),
    k: 7,
    expected: [
      14, 15, 16, 17, 18, 19, 20,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    ],
  },
  {
    name: "100 elementów - K = 1",
    input: Array.from({ length: 100 }, (_, i) => i),
    k: 1,
    expected: [
      99,
      ...Array.from({ length: 99 }, (_, i) => i),
    ],
  },
  {
    name: "100 elementów - K = 50",
    input: Array.from({ length: 100 }, (_, i) => i),
    k: 50,
    expected: [
      ...Array.from({ length: 50 }, (_, i) => i + 50),
      ...Array.from({ length: 50 }, (_, i) => i),
    ],
  },
  {
    name: "100 elementów - K = 100",
    input: Array.from({ length: 100 }, (_, i) => i),
    k: 100,
    expected: Array.from({ length: 100 }, (_, i) => i),
  },
];

// =============================================
// TEST RUNNER
// =============================================

let passed = 0;
let failed = 0;

for (const test of tests) {
  const start = performance.now();

  try {
    // Kopia tablicy, aby testy nie modyfikowały danych.
    const actual = solution([...test.input], test.k);
    const duration = performance.now() - start;

    const success =
      JSON.stringify(actual) === JSON.stringify(test.expected);

    if (success) {
      passed++;
      console.log(
        `✅ ${test.name} (${duration.toFixed(2)} ms)`
      );
    } else {
      failed++;
      console.error(
        `❌ ${test.name}\n` +
        `   Input: ${JSON.stringify(test.input)}\n` +
        `   K: ${test.k}\n` +
        `   Expected: ${JSON.stringify(test.expected)}\n` +
        `   Actual: ${JSON.stringify(actual)}\n` +
        `   Duration: ${duration.toFixed(2)} ms`
      );
    }
  } catch (error) {
    failed++;
    console.error(`❌ ${test.name}: wyjątek`, error);
  }
}

console.log("\n=================================");
console.log(`Wynik: ${passed}/${tests.length} testów`);
console.log(`Zaliczone: ${passed}`);
console.log(`Niezaliczone: ${failed}`);
