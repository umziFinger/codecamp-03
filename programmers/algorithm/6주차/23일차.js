function solution(nums) {
  let pocket = [...new Set(nums)];

  return pocket.length <= nums.length / 2 ? pocket.length : nums.length / 2;
} // 폰켓몬
