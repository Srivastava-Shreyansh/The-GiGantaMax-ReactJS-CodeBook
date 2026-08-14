import { useState } from "react";
import "./App.css";

const createNoteId = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random()}`;

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const cleanTitle = title.trim();
    const cleanDetails = details.trim();
    if (!cleanTitle || !cleanDetails) return;

    setNotes((currentNotes) => [
      { id: createNoteId(), title: cleanTitle, details: cleanDetails },
      ...currentNotes,
    ]);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (id) => {
    setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));
  };

  return (
    <main className="notes-app">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <section className="app-shell">
        <header className="hero">
          <div>
            <p className="eyebrow">YOUR PERSONAL SPACE</p>
            <h1>Noteswaa<br />Banaawa Hoo!</h1>
            <p className="hero-copy">Capture the brilliant, the random, and everything in between.</p>
          </div>
          <div className="hero-badge" aria-label={`${notes.length} notes saved`}>
            <span>{String(notes.length).padStart(2, "0")}</span>
            <small>notes saved</small>
          </div>
        </header>

        <div className="content-grid">
          <section className="composer-panel" aria-labelledby="new-note-heading">
            <div className="panel-heading">
              <span className="heading-icon">✦</span>
              <div>
                <p className="eyebrow">QUICK CAPTURE</p>
                <h2 id="new-note-heading">Create a note</h2>
              </div>
            </div>

            <form onSubmit={submitHandler} className="note-form">
              <label htmlFor="note-title">Title</label>
              <input
                id="note-title"
                type="text"
                placeholder="What's on your mind?"
                value={title}
                maxLength="60"
                onChange={(event) => setTitle(event.target.value)}
              />

              <label htmlFor="note-details">Details</label>
              <textarea
                id="note-details"
                placeholder="Give your thought a little more color..."
                value={details}
                maxLength="500"
                onChange={(event) => setDetails(event.target.value)}
              />

              <button type="submit" className="add-button" disabled={!title.trim() || !details.trim()}>
                <span>+</span> Add note
              </button>
            </form>
          </section>

          <section className="notes-panel" aria-labelledby="notes-heading">
            <div className="notes-heading">
              <div>
                <p className="eyebrow">YOUR COLLECTION</p>
                <h2 id="notes-heading">Tohaar Notes Baa</h2>
              </div>
              <span className="note-count">{notes.length} {notes.length === 1 ? "note" : "notes"}</span>
            </div>

            {notes.length === 0 ? (
              <div className="empty-state">
                <span>✎</span>
                <h3>Your canvas is clear</h3>
                <p>Add your first note and it will appear right here.</p>
              </div>
            ) : (
              <div className="notes-grid">
                {notes.map((note) => (
                  <article key={note.id} className="note-card">
                    <div className="card-glow" />
                    <div className="card-content">
                      <span className="card-marker">NOTE</span>
                      <h3>{note.title}</h3>
                      <p>{note.details}</p>
                    </div>
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => deleteNote(note.id)}
                      aria-label={`Delete note: ${note.title}`}
                    >
                      <span aria-hidden="true">⌫</span> Delete
                    </button>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
