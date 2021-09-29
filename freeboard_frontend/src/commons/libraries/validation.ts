export function fileValidation(myFile) {
  if (!myFile) {
    alert("파일이 없습니다");
    return false;
  }

  if (myFile.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 50mb");
    return false;
  }

  if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
    alert("jpeg 또는 png만 업로드 가능합니다");
    return false;
  }
  return true;
}
