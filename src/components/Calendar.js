import React, { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US')
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Calendar({ onClose }) {
  const [events, setEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: null,
    end: null,
    description: ''
  });

  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setNewEvent({ ...newEvent, start, end });
    setShowEventForm(true);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    if (newEvent.title) {
      setEvents([...events, newEvent]);
      setShowEventForm(false);
      setNewEvent({ title: '', start: null, end: null, description: '' });
    }
  };

  return (
    <div className="calendar-overlay">
      <div className="calendar-container">
        <div className="calendar-header">
          <h2>My Calendar</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          selectable
          onSelectSlot={handleSelectSlot}
          views={['month', 'week', 'day']}
        />

        {showEventForm && (
          <div className="event-form-overlay">
            <div className="event-form">
              <h3>Add New Event</h3>
              <form onSubmit={handleEventSubmit}>
                <div className="form-group">
                  <label>Event Title</label>
                  <input
                    type="text"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Start Time</label>
                  <input
                    type="datetime-local"
                    value={format(newEvent.start, "yyyy-MM-dd'T'HH:mm")}
                    onChange={(e) => setNewEvent({ 
                      ...newEvent, 
                      start: parse(e.target.value, "yyyy-MM-dd'T'HH:mm", new Date())
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>End Time</label>
                  <input
                    type="datetime-local"
                    value={format(newEvent.end, "yyyy-MM-dd'T'HH:mm")}
                    onChange={(e) => setNewEvent({
                      ...newEvent,
                      end: parse(e.target.value, "yyyy-MM-dd'T'HH:mm", new Date())
                    })}
                  />
                </div>
                <div className="form-buttons">
                  <button type="submit" className="submit-button">Add Event</button>
                  <button 
                    type="button" 
                    className="cancel-button"
                    onClick={() => setShowEventForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar; 