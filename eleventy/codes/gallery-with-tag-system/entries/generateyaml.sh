for i in {1..8}; do

    touch "entry-${i}.md"
    echo "---" >> "entry-${i}.md"
    echo "title: image ${i}" >> "entry-${i}.md"
    echo "tags: book" >> "entry-${i}.md"
    echo "image: image-${i}.jpg" >> "entry-${i}.md"
    echo "alt text: image ${i}" >> "entry-${i}.md"
    echo "---" >> "entry-${i}.md"

done