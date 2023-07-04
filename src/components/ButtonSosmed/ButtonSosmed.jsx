const ButtonSosmed = ({text, img}) => {
  return (
    <button className="btn-sosmed inline-flex items-center justify-center gap-x-4">
      {img &&
        <img src={img} alt="" />
      }
      {text}
    </button>
  )
}

export default ButtonSosmed