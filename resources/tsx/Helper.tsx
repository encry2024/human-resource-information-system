export class Helper
{
    public inputFieldToWords(input: string): string
    {
        const fieldName = input.replace("_", " ");
        const words = fieldName.split(' ');

        const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        return capitalizedWords.join(' ');
    }
}
