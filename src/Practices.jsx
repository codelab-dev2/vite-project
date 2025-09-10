export const Practices = () => {
  // return <h1>interView</h1>;
  const student = [1];
  // console.log(Boolean(student.length))
  return (
      <>
        {/*<p>{student.length && "NO student"}</p>*/}
        {/*1st*/}
        {/*<p>{student.length === 0 && "NO student"}</p>*/}
        {/*2nd*/}
        {/*<p>{!student.length && "NO student"}</p>*/}
        {/*3rd*/}
        <p>{Boolean(!student.length) && "NO student"}</p>

        <p>number of student : {student.length}</p>
      </>
  )
}