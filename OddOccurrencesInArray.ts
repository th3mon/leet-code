/**
 * OddOccurrencesInArray - Codility Lesson 2
 *
 * Dana jest niepusta tablica A zawierająca nieparzystą
 * liczbę elementów.
 *
 * Wszystkie wartości poza jedną występują parzystą
 * liczbę razy.
 *
 * Zwróć wartość elementu, który występuje
 * nieparzystą liczbę razy.
 *
 * Przykład:
 * [9, 3, 9, 3, 9, 7, 9] -> 7
 *
 * Ograniczenia:
 * 1 <= N <= 1_000_000
 * N jest nieparzyste
 * 1 <= A[i] <= 1_000_000_000
 *
 * Wszystkie testy spełniają założenia zadania.
 */
function solution(A: number[]): number {
    let result = 0;

    A.forEach((current) => result = result ^ current);

    return result;
}

// =============================================
// TEST CASES
// =============================================

interface TestCase {
  name: string;
  input: number[];
  expected: number;
}

const tests: TestCase[] = [
  // --- Podstawowe przypadki ---
  {
    name: "Przykład Codility",
    input: [9, 3, 9, 3, 9, 7, 9],
    expected: 7,
  },
  {
    name: "Jeden element",
    input: [42],
    expected: 42,
  },
  {
    name: "Trzy elementy",
    input: [1, 2, 1],
    expected: 2,
  },
  {
    name: "Nieparzysty element na początku",
    input: [7, 1, 1, 2, 2],
    expected: 7,
  },
  {
    name: "Nieparzysty element na końcu",
    input: [1, 1, 2, 2, 7],
    expected: 7,
  },
  {
    name: "Nieparzysty element w środku",
    input: [1, 1, 7, 2, 2],
    expected: 7,
  },
  {
    name: "Wiele wystąpień tej samej wartości",
    input: [5, 5, 5, 5, 5],
    expected: 5,
  },
  {
    name: "Jedna wartość występuje trzy razy",
    input: [4, 4, 4, 2, 2],
    expected: 4,
  },
  {
    name: "Wartości występują cztery razy",
    input: [3, 3, 3, 3, 8],
    expected: 8,
  },
  {
    name: "Przeplatane wartości",
    input: [1, 2, 3, 1, 2, 3, 4],
    expected: 4,
  },

  // --- Przypadki brzegowe ---
  {
    name: "Najmniejsza dozwolona wartość",
    input: [1],
    expected: 1,
  },
  {
    name: "Największa dozwolona wartość",
    input: [1_000_000_000],
    expected: 1_000_000_000,
  },
  {
    name: "Duże wartości",
    input: [
      999_999_999,
      1_000_000_000,
      999_999_999,
    ],
    expected: 1_000_000_000,
  },
  {
    name: "Wiele par i jedna wartość",
    input: [10, 20, 30, 40, 10, 20, 30, 40, 50],
    expected: 50,
  },
  {
    name: "Nieparzysta liczba wystąpień większa niż jeden",
    input: [7, 7, 7, 7, 7, 3, 3, 4, 4],
    expected: 7,
  },
  {
    name: "Wszystkie elementy takie same",
    input: Array(101).fill(25),
    expected: 25,
  },
  {
    name: "Wiele identycznych par",
    input: [...Array(100).fill(12), 99],
    expected: 99,
  },
  {
    name: "Dwie duże grupy",
    input: [
      ...Array(200).fill(111),
      ...Array(200).fill(222),
      333,
    ],
    expected: 333,
  },
  {
    name: "Nieparzysty element między grupami",
    input: [
      ...Array(100).fill(10),
      777,
      ...Array(100).fill(20),
    ],
    expected: 777,
  },
  {
    name: "Duża liczba wystąpień nieparzystej wartości",
    input: [
      ...Array(999).fill(123),
      ...Array(1000).fill(456),
    ],
    expected: 123,
  },

  // --- Duże tablice i wydajność ---
  {
    name: "10 001 elementów",
    input: [
      ...Array.from({ length: 5000 }, (_, i) => i + 1),
      ...Array.from({ length: 5000 }, (_, i) => i + 1),
      999_999_999,
    ],
    expected: 999_999_999,
  },
  {
    name: "50 001 elementów",
    input: [
      ...Array.from({ length: 25000 }, (_, i) => i + 1),
      ...Array.from({ length: 25000 }, (_, i) => i + 1),
      123_456_789,
    ],
    expected: 123_456_789,
  },
  {
    name: "100 001 elementów",
    input: [
      ...Array.from({ length: 50000 }, (_, i) => i + 1),
      ...Array.from({ length: 50000 }, (_, i) => i + 1),
      987_654_321,
    ],
    expected: 987_654_321,
  },
  {
    name: "200 001 elementów",
    input: [
      ...Array.from({ length: 100000 }, (_, i) => i + 1),
      ...Array.from({ length: 100000 }, (_, i) => i + 1),
      999_999_999,
    ],
    expected: 999_999_999,
  },
  {
    name: "500 001 elementów",
    input: [
      ...Array.from({ length: 250000 }, (_, i) => i + 1),
      ...Array.from({ length: 250000 }, (_, i) => i + 1),
      888_888_888,
    ],
    expected: 888_888_888,
  },
  {
    name: "999 999 elementów - maksymalny rozmiar nieparzysty",
    input: [
      ...Array.from({ length: 499999 }, (_, i) => i + 1),
      ...Array.from({ length: 499999 }, (_, i) => i + 1),
      1_000_000_000,
    ],
    expected: 1_000_000_000,
  },
  {
    name: "999 999 identycznych elementów",
    input: Array(999999).fill(777),
    expected: 777,
  },
  {
    name: "Duża tablica - nieparzysty element na początku",
    input: [
      987_654_321,
      ...Array.from({ length: 200000 }, (_, i) => i + 1),
      ...Array.from({ length: 200000 }, (_, i) => i + 1),
    ],
    expected: 987_654_321,
  },
  {
    name: "Duża tablica - nieparzysty element w środku",
    input: [
      ...Array.from({ length: 100000 }, (_, i) => i + 1),
      555_555_555,
      ...Array.from({ length: 100000 }, (_, i) => i + 1),
    ],
    expected: 555_555_555,
  },
  {
    name: "Duża tablica - wartości blisko maksimum",
    input: [
      ...Array.from(
        { length: 100000 },
        (_, i) => 900_000_000 + i
      ),
      ...Array.from(
        { length: 100000 },
        (_, i) => 900_000_000 + i
      ),
      1_000_000_000,
    ],
    expected: 1_000_000_000,
  },
];

// =============================================
// TEST RUNNER
// =============================================

let passed = 0;
let failed = 0;

for (const test of tests) {
  let actual: number;

  const start = performance.now();

  try {
    actual = solution(test.input);
  } catch (error) {
    failed++;
    console.error(`❌ ${test.name}: wyjątek`, error);
    continue;
  }

  const duration = performance.now() - start;

  if (actual === test.expected) {
    passed++;
    console.log(
      `✅ ${test.name} (${duration.toFixed(2)} ms)`
    );
  } else {
    failed++;
    console.error(
      `❌ ${test.name}\n` +
      `   N: ${test.input.length}\n` +
      `   Expected: ${test.expected}\n` +
      `   Actual: ${actual}\n` +
      `   Duration: ${duration.toFixed(2)} ms`
    );
  }
}

console.log("\n=================================");
console.log(`Wynik: ${passed}/${tests.length} testów`);
console.log(`Zaliczone: ${passed}`);
console.log(`Niezaliczone: ${failed}`);
