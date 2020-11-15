import React, { Component } from 'react';
import styled from '@emotion/styled';
import genres from './genres.json';
import prefixes from './prefixes.json';
import themes from './themes.json';

const pick = (list) => {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Spacer = styled.div`
    flex: 1;
`;

const Content = styled.div`
    width: 1200px;
    display: flex;
`;

const Field = styled.div`
    padding: 10px;
    border: 3px solid #ffaa00;
    flex: 1;
    text-align: center;
    font-family: Roboto;
    font-size: 2rem;
    border-left: none;
    border-right: none;

    &:first-of-type {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-left: 3px solid #ffaa00;
    }

    &:last-of-type {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-right: 3px solid #ffaa00;
    }
`;

const Button = styled.button`
    margin-top: 50px;
    padding: 10px;
    background-color: #eee;
    border: none;
    border-radius: 5px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 1.5rem;
`;

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstGenre: pick(genres),
            secondGenre: pick(genres),
            firstPrefix: pick(prefixes),
            secondPrefix: pick(prefixes),
            firstTheme: pick(themes),
            secondTheme: pick(themes),
        };
    }

    rollFirstGenre = () => {
        this.setState({
            firstGenre: pick(genres),
        });
    }

    rollSecondGenre = () => {
        this.setState({
            secondGenre: pick(genres),
        });
    }

    rollFirstPrefix = () => {
        this.setState({
            firstPrefix: pick(prefixes),
        });
    }

    rollSecondPrefix = () => {
        this.setState({
            secondPrefix: pick(prefixes),
        });
    }

    rollFirstTheme = () => {
        this.setState({
            firstTheme: pick(themes),
        });
    }

    rollSecondTheme = () => {
        this.setState({
            secondTheme: pick(themes),
        });
    }

    render() {

        const { firstPrefix, secondPrefix, firstGenre, secondGenre, firstTheme, secondTheme } = this.state;

        return (<Container>
            <Spacer />
            <Content>
                <Field>{firstPrefix}<br /><Button onClick={this.rollFirstPrefix}>roll</Button></Field>
                <Field>{firstTheme}<br /><Button onClick={this.rollFirstTheme}>roll</Button></Field>
                <Field>{firstGenre}<br /><Button onClick={this.rollFirstGenre}>roll</Button></Field>
            </Content>
            <Spacer />
        </Container>);
    }
}

export default App;
