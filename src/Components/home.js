import React,{ useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Configuration, OpenAIApi } from 'openai';

export default function Home(props) {
    const configuration = new Configuration({
      apiKey: 'API_KEY',
    });
    const openai = new OpenAIApi(configuration);

    const [openAiData, setOpenAiData] = useState('');

    useEffect(() => {}, []);
    
    async function fetchData(value) {
      const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: value,
          temperature: 0,
          max_tokens: 1,
        });
        return response.data.choices;
    }
    
    async function handleChange(event) {
      const selectedVal = event.target.value
      if(/\s+$/.test(selectedVal)) {
        const filteredString = selectedVal.substring(0, selectedVal.length - 1);
          const choices = await fetchData(filteredString);
          if(choices && choices[0] && choices[0].text.trim() !== ''){
            const trimmedChoices = choices[0].text.trim();
            if(trimmedChoices.length === 1){
              const removeSpecialChar = trimmedChoices.replace(/[^a-zA-Z0-9 ]/g, '');
              if(!removeSpecialChar){
                setOpenAiData(selectedVal)
              }else{
                const text = filteredString +' '+trimmedChoices+' ';
                setOpenAiData(text)
              }
            }else{
              const text = filteredString +' '+trimmedChoices+' ';
              setOpenAiData(text)
            }
          }else{
            setOpenAiData(selectedVal)
          }
      }else{
        setOpenAiData(event.target.value)
      }
    }

    return (
      <Container className="p-3">
        <Row>
          <h1 className="header">Sentence Completion Game</h1>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={10} cols={10} onChange={handleChange}
                value={openAiData}/>
            </Form.Group>
          </Form>
        </Row>
      </Container>
        
    )
}
