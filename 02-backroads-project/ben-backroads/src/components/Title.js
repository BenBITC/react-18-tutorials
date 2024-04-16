const Title = ({ blackText, colorText }) => {
  return (
    <div className='section-title'>
      <h2>
        {blackText} <span>{colorText}</span>
      </h2>
    </div>
  )
}
export default Title
