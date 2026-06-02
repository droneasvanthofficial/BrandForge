import streamlit as st
import os
import io
from PIL import Image
from google import genai
from google.genai import types

st.set_page_config(page_title="AI Social Media Content Generator", page_icon="📱", layout="wide")

st.title("📱 AI Social Media Content Generator")
st.markdown("Generate stunning Instagram posts and captions for your brand using Gemini AI.")

# Sidebar for API Key
st.sidebar.header("Configuration")
api_key = st.sidebar.text_input("Gemini API Key", type="password", help="Get your API key from Google AI Studio")

# Main inputs
st.subheader("Brand Information")
brand_name = st.text_input("Brand Name", placeholder="e.g., Brew & Beans")
brand_desc = st.text_area("Brand Description", placeholder="e.g., A premium artisanal coffee shop serving locally sourced organic coffee with a cozy vibe.")

if st.button("Generate Content", type="primary"):
    if not api_key:
        st.error("Please enter your Gemini API Key in the sidebar.")
    elif not brand_name or not brand_desc:
        st.error("Please provide both Brand Name and Brand Description.")
    else:
        try:
            with st.spinner("Initializing AI..."):
                client = genai.Client(api_key=api_key)

            # Generate Caption
            with st.spinner("Generating Instagram Caption..."):
                caption_prompt = f"""
                You are an expert social media manager.
                Create a highly engaging and attractive Instagram caption for a brand named '{brand_name}'.
                Brand Description: {brand_desc}
                The caption should include relevant emojis and trending hashtags. Keep it compelling and action-oriented.
                """
                caption_response = client.models.generate_content(
                    model='gemini-2.5-flash',
                    contents=caption_prompt,
                )
                caption_text = caption_response.text

            # Generate Image Prompt & Image
            with st.spinner("Designing the Poster..."):
                # We construct a detailed prompt for the image generator
                image_prompt = f"A highly attractive, professional, and eye-catching Instagram poster for a brand named '{brand_name}'. Brand context: {brand_desc}. Visually appealing, high quality, 4k, vibrant colors, social media advertising style, no text overlaid."

                image_result = client.models.generate_images(
                    model='imagen-3.0-generate-002',
                    prompt=image_prompt,
                    config=types.GenerateImagesConfig(
                        number_of_images=1,
                        output_mime_type="image/jpeg",
                        aspect_ratio="1:1" # Instagram square
                    )
                )

                generated_image = image_result.generated_images[0]
                image = Image.open(io.BytesIO(generated_image.image.image_bytes))

            # Display Results
            st.success("Content Generated Successfully!")
            st.markdown("---")

            col1, col2 = st.columns([1, 1])

            with col1:
                st.subheader("🖼️ Instagram Poster")
                st.image(image, caption=f"Poster for {brand_name}", use_container_width=True)

                # Provide download button for image
                buf = io.BytesIO()
                image.save(buf, format="JPEG")
                byte_im = buf.getvalue()
                st.download_button(
                    label="Download Poster",
                    data=byte_im,
                    file_name=f"{brand_name.replace(' ', '_')}_poster.jpg",
                    mime="image/jpeg"
                )

            with col2:
                st.subheader("📝 Instagram Caption")
                st.write(caption_text)

                # We can use st.code or st.text_area to make it easy to copy, or just st.write
                st.text_area("Copy your caption here:", value=caption_text, height=300)

        except Exception as e:
            st.error(f"An error occurred during generation: {str(e)}")
