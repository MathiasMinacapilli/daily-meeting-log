import './App.css';
import { Button, Container, TextField, Snackbar } from '@material-ui/core';
import { useEffect, useState } from 'react';

function App() {
  const [sprintObjectives, setSprintObjectives] = useState('- primer objetivo');
  const [yesterdayObjectives, setYesterdayObjectives] = useState('');
  const [todayObjectives, setTodayObjectives] = useState('');
  const [warnings, setWarnings] = useState('- warning');
  const [dailyLog, setDailyLog] = useState('');
  const [showCopySucess, setShowCopySucess] = useState(false);

  useEffect(() => {
    // get users
    const users = yesterdayObjectives;
  }, [yesterdayObjectives]);

  const createDailyLog = () => {
    let rawDailyLog = '';
    rawDailyLog += 'Objetivos del sprint:\n'
    rawDailyLog += sprintObjectives;
    rawDailyLog += '\n\n'
    rawDailyLog += 'Ayer:\n'
    rawDailyLog += yesterdayObjectives;
    rawDailyLog += '\n\n'
    rawDailyLog += 'Hoy:\n'
    rawDailyLog += todayObjectives;
    rawDailyLog += '\n\n'
    rawDailyLog += 'Warnings:\n'
    rawDailyLog += warnings;
    return rawDailyLog;
  }

  useEffect(() => {
    setDailyLog(createDailyLog());
  });

  useEffect(() => {
    setDailyLog(createDailyLog());
  }, [sprintObjectives, yesterdayObjectives, todayObjectives, warnings]);

  const getActualDate = () => {
    const date = new Date();
    return date;
  }

  const getActualDateString = () => {
    const date = getActualDate();
    return String(date);
  }

  const getYesterdayDateString = () => {
    const date = getActualDate();
    date.setDate(date.getDate() - 1)
    return String(date);
  }

  const onChangeSprintObjectivesHandler = (event) => {
    const newValue = event.target.value;
    setSprintObjectives(newValue);
  }

  const onChangeYesterdayHandler = (event) => {
    const newValue = event.target.value;
    setYesterdayObjectives(newValue);
  }

  const onChangeTodayHandler = (event) => {
    const newValue = event.target.value;
    setTodayObjectives(newValue);
  }

  const onChangeWarningsHandler = (event) => {
    const newValue = event.target.value;
    setWarnings(newValue);
  }

  const onClickCopyHandler = () => {
    // TODO: fix code
    var copyTextarea = document.querySelector('#daily-log');
    copyTextarea.focus();
    copyTextarea.select();
    debugger;
    var successful = document.execCommand('copy');
    setShowCopySucess(successful);
  }

  return (
    <div className="App">
      <Container>
        <h1>Daily Logger</h1>

        <Container>
          <h3>Objetivos del sprint</h3>
          <TextField label="Objetivos del sprint" multiline defaultValue={sprintObjectives} onChange={onChangeSprintObjectivesHandler}></TextField>
        </Container>

        <Container>
          <h3>Ayer {getYesterdayDateString()}</h3>
          <TextField label="Ayer" multiline onChange={onChangeYesterdayHandler}></TextField>
        </Container>

        <Container>
          <h3>Hoy {getActualDateString()}</h3>
          <TextField label="Hoy" multiline onChange={onChangeTodayHandler}></TextField>
        </Container>

        <Container>
          <h3>Warnings/Blockers/Comentarios</h3>
          <TextField label="Warnings/Blockers/Comentarios" multiline defaultValue={warnings} onChange={onChangeWarningsHandler}></TextField>
        </Container>

        <Container>
          <h3>Daily Log</h3>
          <TextField label="Daily log" multiline value={dailyLog} disabled id="daily-log">
            {dailyLog}
          </TextField>
        </Container>

        <Container>
          {/* <Button variant="contained" color="primary" onClick={onClickCopyHandler}>
            Copiar
          </Button>
          <Snackbar message="copy sucess" open={showCopySucess} /> */}
          <p>---</p>
        </Container>
      </Container>
    </div>
  );
}

export default App;
