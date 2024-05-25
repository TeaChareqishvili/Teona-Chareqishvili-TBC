import { getSession } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import AvatarUpload from "./AvatarUpload";

export default async function UserProfile() {
    const session = await getSession();

    if (!session || !session.user) {
        return <div className="flex items-center justify-center h-screen text-gray-500">
            No user session found.
        </div>;
    }

    const { user } = session;
    const [name, surname] = user.name.split(' ');

    return (
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto mt-10">
            <Image
                src={user.picture}
                alt={user.name}
                width={100}
                height={100}
                className="rounded-full"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-800">User Information</h2>
            <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-700">Name and Surname:</h3>
                {user.given_name && user.family_name ? <p className="text-gray-600">{name} {surname}</p> : <p className="text-gray-600">{user.nickname}</p>}
            </div>
            <div className="mt-2 text-center">
                <h3 className="text-lg font-medium text-gray-700">Email:</h3>
                <p className="text-gray-600">{user.email}</p>
            </div>
            <AvatarUpload />
        </div>
    );
}
