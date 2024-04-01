import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import notesStore from "../stores/notesStore";

export default function NotesPage() {

    const store = notesStore();
    useEffect(()=>{
      store.fetchNotes()
    }, [])

    return (
        <div className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="flex h-[475px] w-full gap-2 max-w-5xl">
                <Notes/>
                <CreateForm/>
                <UpdateForm/>
            </div>
        </div>
    )
}
