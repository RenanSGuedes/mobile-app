export default function handlePointer(min, max, currentValue) {
  const angleInDegrees = 45 * (max + 5 * min - 6 * currentValue)/(min - max)

  return angleInDegrees 
}