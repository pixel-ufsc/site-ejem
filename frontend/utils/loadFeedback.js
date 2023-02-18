export async function loadFeedback() {
    const feedbackFetch = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/feedbacks?populate=foto`
    );
    const feedback = await feedbackFetch.json();
    
    return feedback.data;
}
