import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function UseEffectPage() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>();

  function onClickChange() {
    setIsChange((prev) => !prev);
  }

  useEffect(() => {
    alert("Rendered!");
    inputRef.current.focus();
    return () => {
      alert("Bye!");
    };
  }, []);

  useEffect(() => {
    alert("Changed!");
  }, [isChange]);

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
      <input type="text" ref={inputRef} />
    </>
  );
}
