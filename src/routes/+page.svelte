<script>
	import { base } from "$app/paths";

    let name = '';
    let email = '';
    let message = '';
    let formStatus = '';
    console.log(base+'tst');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      formStatus = 'Sending...';
  
      // Replace this URL with your Formspree or EmailJS endpoint
      const response = await fetch('https://formspree.io/f/mzzzkqry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });
  
      if (response.ok) {
        formStatus = 'Message sent successfully!';
        name = '';
        email = '';
        message = '';
      } else {
        formStatus = 'Failed to send the message.';
      }
    };
  </script>
  
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <!-- Header Section -->
    <header class="text-center py-8">
      <h1 class="text-4xl font-bold text-gray-800">Welcome to My Landing Page</h1>
      <p class="text-lg text-gray-600 mt-4">Contact us for more information</p>
    </header>
  
    <!-- Contact Form -->
    <section class="bg-white shadow-md rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Contact Us</h2>
      <form on:submit={handleSubmit} class="space-y-4">
        <div>
          <label for="name" class="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            bind:value={name}
            class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
  
        <div>
          <label for="email" class="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            bind:value={email}
            class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
  
        <div>
          <label for="message" class="block text-gray-700">Message:</label>
          <textarea
            id="message"
            bind:value={message}
            class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
  
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
      <p class="mt-4 text-center text-gray-600">{formStatus}</p>
    </section>
  </div>
  