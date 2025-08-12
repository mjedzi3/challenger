import React, { useState, useEffect } from 'react';
import useHealth from '../../../hooks/Health/useHealth';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import { Box, CircularProgress, Button, Grid, Typography, Link } from '@mui/material';
import CardContainer from '../../../components/CardContainer';

const ModuleOne = () => {
  const {data, loading, error} = useHealth();
  const module1 = data?.[0]?.module1;

  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (module1?.subContent) {
      setCards(module1.subContent);
    }
  }, [module1]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(cards);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    setCards(reordered);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <>
      {data?.[0] ? (
      <Box textAlign="center">
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <DragDropContext
            onDragEnd={onDragEnd}
          >
            <Droppable droppableId={'test'}>
              {(provided) => (
                <Grid 
                  container 
                  spacing={3} 
                  justifyContent="center" 
                  alignItems="center"
                  maxWidth="lg"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {cards.map((item, index) => (
                    <Draggable key={item.title} draggableId={item.title} index={index}>
                        {(provided) => (
                        <Grid 
                          item 
                          xs={12} 
                          sm={6} 
                          md={4} 
                          key={index} 
                          display="flex" 
                          justifyContent="center" 
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <CardContainer 
                            img={item.imageUrl} 
                            title={item.title}
                            description={item.description} 
                          />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        </Box>
        {/* Link at the bottom */}
        {/* <Button component={Link} href={module1.linkUrl} variant="contained" color="primary" sx={{ mt: 2 }}>
          {module1.linkTitle}
        </Button> */}
      </Box>
      ) : (
        <Typography> No data available for Module 1 </Typography>
      )}
    </>
);
};

export default ModuleOne;
