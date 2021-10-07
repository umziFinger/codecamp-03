export default function HofPage() {
  //   function onClickFunction(event) {
  //     alert(`${event.target.id}번째 입니다.`);
  //   }

  //   function onClickFunction2(index) {
  //     alert({ index });
  //   }

  const onClickFunction2 = (index) => () => {
    alert(`${index}번째 입니다`);
  };

  return (
    <>
      <div>HOF 연습 페이지</div>
      {["철수", "영희", "훈이"].map((el, index) => (
        <div onClick={onClickFunction2(index)}>{el}입니다</div>
      ))}
    </>
  );
}
