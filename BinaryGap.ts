/**
 * BinaryGap - Codility Lesson 1
 *
 * Binary gap to maksymalna sekwencja kolejnych zer,
 * otoczona jedynkami z obu stron w zapisie binarnym N.
 *
 * Zwróć długość najdłuższej takiej sekwencji.
 * Jeśli żadna nie istnieje, zwróć 0.
 *
 * Zakres: 1 <= N <= 2_147_483_647
 */

function solution(N: number): number {
  const binary = N.toString(2);
  const one = "1";
  
  let maxGap = 0;
  let currentGap = 0;
  
  for (let index = 1; index < binary.length; index++) {
    const foundNextOne = binary[index] === one;
    
    if (binary[index] !== one) currentGap++;
    
    if (foundNextOne) {
      maxGap = Math.max(currentGap, maxGap)
      currentGap = 0;
    }
  }
  
  return maxGap;
}

// =============================================
// TEST CASES
// =============================================

interface TestCase {
  name: string;
  input: number;
  expected: number;
}

const tests: TestCase[] = [
  // --- Podstawowe przypadki ---
  {
    name: "Jedna przerwa",
    input: 9,
    expected: 2,
  },
  {
    name: "Dwie przerwy o różnych długościach",
    input: 529,
    expected: 4,
  },
  {
    name: "Zera na końcu nie są liczone",
    input: 20,
    expected: 1,
  },
  {
    name: "Brak zer",
    input: 15,
    expected: 0,
  },
  {
    name: "Same końcowe zera",
    input: 32,
    expected: 0,
  },
  {
    name: "Przykład Codility",
    input: 1041,
    expected: 5,
  },
  {
    name: "Najmniejsza dozwolona liczba",
    input: 1,
    expected: 0,
  },
  {
    name: "Pojedyncze zero między jedynkami",
    input: 5,
    expected: 1,
  },
  {
    name: "Dwie przerwy tej samej długości",
    input: 273,
    expected: 3,
  },
  {
    name: "Przerwa i końcowe zera",
    input: 328,
    expected: 2,
  },
  {
    name: "Długa przerwa",
    input: 1025,
    expected: 9,
  },
  {
    name: "Maksymalna dozwolona liczba",
    input: 2147483647,
    expected: 0,
  },
  {
    name: "Duża liczba z długą przerwą",
    input: 1073741825,
    expected: 29,
  },
  {
    name: "Tylko dwie jedynki",
    input: 3,
    expected: 0,
  },
  {
    name: "Kilka krótkich przerw",
    input: 85,
    expected: 1,
  },

  // --- Duże liczby i przypadki brzegowe ---
  {
    name: "Duża liczba - długa przerwa 28 zer",
    input: 536870913, // 2^29 + 1
    expected: 28,
  },
  {
    name: "Duża liczba - długa przerwa 27 zer",
    input: 536870914, // 2^29 + 2
    expected: 27,
  },
  {
    name: "Duża liczba - przerwa 9 zer",
    input: 1074790400, // 2^30 + 2^20
    expected: 9,
  },
  {
    name: "Duża liczba - dwie długie przerwy",
    input: 1074790401, // 2^30 + 2^20 + 1
    expected: 19,
  },
  {
    name: "Duża liczba - naprzemienne bity",
    input: 1431655765,
    expected: 1,
  },
  {
    name: "Duża liczba - naprzemienne bity z zerem na końcu",
    input: 715827882,
    expected: 1,
  },
  {
    name: "Duża liczba - tylko jedna jedynka",
    input: 1073741824, // 2^30
    expected: 0,
  },
  {
    name: "Duża liczba - same jedynki",
    input: 2147483647, // 2^31 - 1
    expected: 0,
  },
  {
    name: "Duża liczba - długa przerwa na początku",
    input: 1073741827, // 2^30 + 3
    expected: 28,
  },
  {
    name: "Duża liczba - przerwa i końcowe zera",
    input: 1073741826, // 2^30 + 2
    expected: 28,
  },
  {
    name: "Duża liczba - wiele krótkich przerw",
    input: 1227133513,
    expected: 2,
  },
  {
    name: "Duża liczba - dwa bloki jedynek",
    input: 2130706433,
    expected: 23,
  },
  {
    name: "Duża liczba - maksymalna z jednym zerem",
    input: 2147483645,
    expected: 1,
  },
  {
    name: "Duża liczba - zera tylko na końcu",
    input: 2147483646,
    expected: 0,
  },
  {
    name: "Duża liczba - przerwa blisko końca",
    input: 2147483639,
    expected: 1,
  },
];

// =============================================
// TEST RUNNER
// =============================================

let passed = 0;
let failed = 0;

for (const test of tests) {
  let actual: number;

  try {
    actual = solution(test.input);
  } catch (error) {
    failed++;
    console.error(`❌ ${test.name}: wyjątek`, error);
    continue;
  }

  if (actual === test.expected) {
    passed++;
    console.log(`✅ ${test.name}`);
  } else {
    failed++;
    console.error(
      `❌ ${test.name}\n` +
      `   N: ${test.input}\n` +
      `   Binary: ${test.input.toString(2)}\n` +
      `   Expected: ${test.expected}\n` +
      `   Actual: ${actual}`
    );
  }
}

console.log("\n=================================");
console.log(`Wynik: ${passed}/${tests.length} testów`);
console.log(`Zaliczone: ${passed}`);
console.log(`Niezaliczone: ${failed}`);
