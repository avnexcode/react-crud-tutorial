import { useMutationCreateUser, useMutationDeleteUser, useMutationUpdateUser, useQueryUserID, useQueryUsers } from "../../features/user"

export default function UserIndex() {
    const { data: users, loading: isLoadingUsers } = useQueryUsers({
        onSuccess: () => {
            console.log('success')
        }, onError: () => {
            console.log('error')
        }
    })

    const { data: user, loading: isLoadingUser } = useQueryUserID('123', {
        onSuccess: () => {
            console.log('success')
        }, onError: () => {
            console.log('error')
        }
    })

    const { mutate: createUser, loading: isLoadingCreateUser } = useMutationCreateUser({
        onSuccess: () => {
            console.log('success')
        }, onError: () => {
            console.log('error')
        }
    })
    const { mutate: updateUser, loading: isLoadingUpdateUser } = useMutationUpdateUser({
        onSuccess: () => {
            console.log('success')
        }, onError: () => {
            console.log('error')
        }
    })
    const { mutate: deleteUser, loading: isLoadingDeleteUser } = useMutationDeleteUser({
        onSuccess: () => {
            console.log('success')
        }, onError: () => {
            console.log('error')
        }
    })


    const handleSubmit = () => {
        updateUser({})
        createUser({})
        deleteUser('')
    }

    return (
        <div>

        </div>
    )
}
