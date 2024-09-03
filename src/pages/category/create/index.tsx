import ButtonForm from "../../../components/elements/ButtonForm";
import InputGroup from "../../../components/fragments/InputGroup";

export default function CreateCategory() {
    return (
        <>
            <div>
                <h1 className="text-5xl">Create Category</h1>
            </div>
            <div>
                <form action="">
                    <div className="mb-2">
                        <InputGroup name="name" />
                    </div>
                    <div className="mb-2">
                        <InputGroup name="description" />
                    </div>
                    <div className="mb-2 flex justify-end">
                        <ButtonForm type="submit">Create</ButtonForm>
                    </div>
                </form>
            </div>
        </>
    )
}