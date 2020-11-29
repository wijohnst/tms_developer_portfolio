export default function getClipPath(target){

    const paths = {
        circle : 'circle(50% at 50% 50%)',
        rightChevron : 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
        leftChevron : 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)'
    }

    return paths[target]
}
