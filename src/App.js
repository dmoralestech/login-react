import React from 'react';
import {Card, CardTitle, MuiThemeProvider} from 'material-ui';
import './App.css';

const App = () => {
    return (
        <MuiThemeProvider>
            <Card className="container">
                <CardTitle title="React Application" subtitle="This is the home page." />
            </Card>
        </MuiThemeProvider>
    );
}

export default App;