import axios from 'axios'

// create a new instance of axios
export default axios.create({
	// i know this is bad form but this is just a tutorial
	// test this by pasting it into browser window 
	//      it should say - error	"You must be logged in!"
	baseURL: 'http://a7a8-2601-444-8280-3950-448e-e576-2825-906f.ngrok.io'
})
