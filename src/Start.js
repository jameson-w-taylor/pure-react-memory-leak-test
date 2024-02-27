import { Link } from 'react-router-dom';

export default function Start() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/memory-leak">
              Go Try Memory Leak
            </Link>
          </li>
          <li>
            <Link to="/works-fine">
              Go To Happy Place
            </Link>
          </li>
        </ul>
      </nav>

      Use this app to verify the memory does not exist in this repository when compared to the other <a target="_blank" href="https://github.com/jameson-w-taylor/ionic-react-memory-leak">one</a>.<br />
      Be sure to run this test in "Incognito Mode", as it seems that the LastPass extension causes a memory leak.<br />
      Open dev tools to the "Memory" tab so you can take heap snapshots.<br />
      <hr />
      First, let's notice what should be normal behavior.<br />
      <ol>
        <li>Navigate from here to "Happy Place", you'll see a button</li>
        <li>Trigger garbage collection, and take a snapshot</li>
        <li>Navigate back to "Start"</li>
        <li>Trigger garbage collection, and take a snapshot</li>
        <li>With the first snapshot selected, use 'ctrl-f' to search for "WhyIsThisHappening?" in the snapshot</li>
        <li>There should be 4 results, one prefixed with a timestamp and 3 without a prefix (2 are from the text on this page)</li>
        <li>With the second snapshot selected, use 'ctrl-f' to search for "WhyIsThisHappening?" in the snapshot</li>
        <li>There should only be 3 results, all with no timestamp (2 are from the text in this page)</li>
        <li>Repeat as many times as you like, the result should not change</li>
      </ol>
      <hr />
      Now let's verify the memory leak is not present like it is in the other repository.
      <ol>
        <li>Navigate from here to "Memory Leak", you'll see a button</li>
        <li>Trigger garbage collection, and take a snapshot</li>
        <li>Navigate back to "Start"</li>
        <li>Trigger garbage collection, and take a snapshot</li>
        <li>With the first snapshot selected, use 'ctrl-f' to search for "WhyIsThisHappening?" in the snapshot</li>
        <li>There should be 4 results, one prefixed with a timestamp and 3 without a prefix (2 are from the text on this page)</li>
        <li>With the second snapshot selected, use 'ctrl-f' to search for "WhyIsThisHappening?" in the snapshot</li>
        <li>There will be 3 results, all with no timestamp (2 are from the text on this page)</li>
        <li>Repeat as many times as you like, the result should not change (unlike in the other repository)</li>
        <li>Compared to the Ionic based repository, there does not seem to be an extra reference being kept around. Also the LastPass extension does not seem to create a memory leak with this sample app.</li>
      </ol>
    </div>
  );
}