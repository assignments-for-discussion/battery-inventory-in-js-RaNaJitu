const assert = require("assert");

function countBatteriesByHealth(presentCapacities) {
  let healthy = 0;
  let exchange = 0;
  let failed = 0;

  const ratedCapacity = 120;

  for (const capacity of presentCapacities) {
    // Calculate the state-of-health
    const soh = (capacity / ratedCapacity) * 100;

    if (soh > 80) {
      healthy++;
    } else if (soh >= 63 && soh <= 80) {
      exchange++;
    } else {
      failed++;
    }
  }

  return {
    healthy,
    exchange,
    failed,
  };
}

function testBucketingByHealth() {
  console.log("Counting batteries by SoH...");
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
