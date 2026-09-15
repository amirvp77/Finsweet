export default function Form() {
  return (
    <>
      <form
        className="
        w-full 
        lg:w-[1061]
        h-auto 
        lg:h-[640]
        rounded-2xl 
        bg-[#F4F6FC]
        mt-10
        lg:mt-10
        mb-10
        lg:mb-20
        m-auto
        px-6
        lg:px-0
        py-8
        lg:py-0"
        action=""
      >
        <div
          className="
          grid 
          grid-cols-1
          lg:grid-cols-2
          justify-center
          items-center
          "
        >
          <div className="w-full lg:w-[438] h-auto lg:h-[102] p-0 lg:p-12">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full lg:w-[438] h-[64] rounded-2xl border p-6 border-black"
            />
          </div>

          <div className="w-full lg:w-[438] h-auto lg:h-[102] p-0 lg:p-12 mt-6 lg:mt-0">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full lg:w-[438] h-[64] rounded-2xl border p-6 border-black"
            />
          </div>

          <div className="w-full lg:w-[438] h-auto lg:h-[102] p-0 lg:p-12 mt-6 lg:mt-0">
            <label>Subject</label>

            <input
              type="text"
              placeholder="Provide context"
              className="w-full lg:w-[438] h-[64] rounded-2xl border p-6 border-black"
            />
          </div>

          <div className="w-full lg:w-[438] h-auto lg:h-[102] p-0 lg:p-12 mt-6 lg:mt-0">
            <label>Subject</label>

            <input
              type="text"
              placeholder="Select Subject"
              className="w-full lg:w-[438] h-[64] rounded-2xl border p-6 border-black"
            />
          </div>
        </div>

        <div
          className="
          w-full 
          lg:w-[908]
          h-auto
          lg:h-[176]
          m-auto
          mt-10
          lg:mt-20
        "
        >
          <h3 className="text-left">Message</h3>

          <input
            type="text"
            placeholder="Write your question here"
            className="w-full lg:w-[908] h-[130] rounded-2xl border p-6 border-black"
          />
        </div>

        <div
          className="
          w-full
          lg:w-[908]
          h-auto
          lg:h-[176]
          px-8
          mt-10
          flex
          justify-start
        "
        >
          <input
            type="submit"
            value="Send Message"
            className="
            w-64
            h-16
            bg-[#282938]
            rounded-full
            text-[#F4F6FC]
            font-normal
            text-lg
            leading-8
            mt-8
            cursor-pointer
            hover:bg-[#535460]
            duration-300
            "
          />
        </div>
      </form>
    </>
  );
}
