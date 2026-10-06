/** Fixed, blurred lavender/olive shapes behind the glass surfaces. */
export function Background() {
  return (
    <div aria-hidden className="bg-orbs">
      <span className="-top-32 -left-24 size-[34rem] bg-lavender-200" />
      <span className="top-[30%] -right-40 size-[30rem] bg-olive-200" />
      <span className="-bottom-40 left-[20%] size-[32rem] bg-lavender-100" />
      <span className="top-[55%] left-[-10rem] size-[22rem] bg-olive-100" />
    </div>
  )
}
