import Image from "next/image";

export default function UserImageProfile({ userimg, data }: any) {
  console.log(data, "data");
  return (
    <>
      {" "}
      <div className=" w-[250px] h-[250px]">
        <Image
          src={data?.user.img}
          alt={userimg?.name}
          width={250}
          height={250}
          className="object-cover rounded-full w-full h-full"
        />
      </div>
    </>
  );
}
