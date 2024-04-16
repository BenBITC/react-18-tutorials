const ErrorExample = () => {
  let count = 0
  return (
    <>
      <h2>count is {count}</h2>
      <button
        onClick={() => {
          count++
          console.log(count)
        }}
      >
        Count Higher!!
      </button>
    </>
  )
}

export default ErrorExample
