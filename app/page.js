import {Box, Stack, Typography} from "@mui/material";

const item = [
    'tomato',
    'potato',
    'onion',
    'garlic',
    'ginger',
    'carrot',
    'cabbage',
    'cauliflower',
    'broccoli'
    ]

export default function Home() {
  return(

      <Box
        width = "100vw"
        Height = "100vh"
        display = {'flex'}
        justifyContent = {'center'}
        alignItems = {'center'}
        flexDirection ={'column'}
      >
          <Box border={2} borderRadius={5} padding={1} borderColor="#4ADEDE">
          <Box  width = "600px" height = "80px" bgcolor = "#4ADEDE" justifyContent = {'center'} borderRadius = {5} padding={2}>
                <Typography
                    variant = "h4"
                    color = "black"
                    align = "center"
                    >
                    Pantry Items
                </Typography>
          </Box>
          <br/>
          <Stack width = "600px" height = "300px" spacing = {2} overflow ={'auto'}>
              {item.map((i) => (
                  <Box
                      key={i}
                      bgcolor={'#f1f1f1'}
                      borderRadius={5}
                      padding={2}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}>
                      <Typography
                            variant={'h5'}
                            color={'#000'}
                            align={'center'}>
                      {
                        i.charAt(0).toUpperCase() + i.slice(1)
                      }
                        </Typography>
                  </Box>
              ))}
          </Stack>
          </Box>
      </Box>
  )
}