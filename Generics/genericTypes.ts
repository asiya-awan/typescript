function betterEcho1<T>(data: T) {
  return data;
}

const echo2: <T>(data: T) => T = betterEcho1;

echo2<string>("Something");
