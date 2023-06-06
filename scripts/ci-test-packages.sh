echo "Testing spaceweb package"
yarn workspace @sprinklr/spaceweb test --json --outputFile=../../spaceweb-ci-results.json
SPACEWEB_TESTS_COUNT=$(cat ./spaceweb-ci-results.json |  grep -o '"numTotalTests"\ *:\ *[0-9]*' | grep -o '[0-9]*$')
SPACEWEB_FAILED_TESTS_COUNT=$(cat ./spaceweb-ci-results.json |  grep -o '"numFailedTestSuites"\ *:\ *[0-9]*' | grep -o '[0-9]*$')

if [ "$SPACEWEB_FAILED_TESTS_COUNT" != 0 ]
then
  echo "spaceweb - $SPACEWEB_FAILED_TESTS_COUNT test(s) failed"
  exit 1
fi

echo "Testing spaceweb-form package"
yarn workspace @sprinklr/spaceweb-form test --json --outputFile=../../spaceweb-form-ci-results.json
SPACEWEB_FORM_TESTS_COUNT=$(cat ./spaceweb-form-ci-results.json |  grep -o '"numTotalTests"\ *:\ *[0-9]*' | grep -o '[0-9]*$')
SPACEWEB_FORM_FAILED_TESTS_COUNT=$(cat ./spaceweb-form-ci-results.json |  grep -o '"numFailedTestSuites"\ *:\ *[0-9]*' | grep -o '[0-9]*$')

if [ "$SPACEWEB_FORM_FAILED_TESTS_COUNT" != 0 ]
then
  echo "spaceweb-form - $SPACEWEB_FORM_FAILED_TESTS_COUNT test(s) failed"
  exit 1
fi

echo "Testing spaceweb-charts package"
yarn workspace @sprinklr/spaceweb-charts test --json --outputFile=../../spaceweb-charts-ci-results.json
SPACEWEB_CHARTS_TESTS_COUNT=$(cat ./spaceweb-charts-ci-results.json |  grep -o '"numTotalTests"\ *:\ *[0-9]*' | grep -o '[0-9]*$')
SPACEWEB_CHARTS_FAILED_TESTS_COUNT=$(cat ./spaceweb-charts-ci-results.json |  grep -o '"numFailedTestSuites"\ *:\ *[0-9]*' | grep -o '[0-9]*$')

if [ "$SPACEWEB_CHARTS_FAILED_TESTS_COUNT" != 0 ]
then
  echo "spaceweb-charts - $SPACEWEB_CHARTS_FAILED_TESTS_COUNT test(s) failed"
  exit 1
fi

echo "Testing spaceweb-editor package"
yarn workspace @sprinklr/spaceweb-editor test --json --outputFile=../../spaceweb-editor-ci-results.json
SPACEWEB_EDITOR_TESTS_COUNT=$(cat ./spaceweb-editor-ci-results.json |  grep -o '"numTotalTests"\ *:\ *[0-9]*' | grep -o '[0-9]*$')
SPACEWEB_EDITOR_FAILED_TESTS_COUNT=$(cat ./spaceweb-editor-ci-results.json |  grep -o '"numFailedTestSuites"\ *:\ *[0-9]*' | grep -o '[0-9]*$')

if [ "$SPACEWEB_EDITOR_FAILED_TESTS_COUNT" != 0 ]
then
  echo "spaceweb-editor - $SPACEWEB_EDITOR_FAILED_TESTS_COUNT test(s) failed"
  exit 1
fi

echo "Testing spaceweb-meet package"
yarn workspace @sprinklr/spaceweb-meet test --json --outputFile=../../spaceweb-meet-ci-results.json
SPACEWEB_MEET_TESTS_COUNT=$(cat ./spaceweb-meet-ci-results.json |  grep -o '"numTotalTests"\ *:\ *[0-9]*' | grep -o '[0-9]*$')
SPACEWEB_MEET_FAILED_TESTS_COUNT=$(cat ./spaceweb-meet-ci-results.json |  grep -o '"numFailedTestSuites"\ *:\ *[0-9]*' | grep -o '[0-9]*$')

if [ "$SPACEWEB_MEET_FAILED_TESTS_COUNT" != 0 ]
then
  echo "spaceweb-meet - $SPACEWEB_MEET_FAILED_TESTS_COUNT test(s) failed"
  exit 1
fi

echo "Testing spaceweb-table package"
yarn workspace @sprinklr/spaceweb-table test --json --outputFile=../../spaceweb-table-ci-results.json
SPACEWEB_TABLE_TESTS_COUNT=$(cat ./spaceweb-table-ci-results.json |  grep -o '"numTotalTests"\ *:\ *[0-9]*' | grep -o '[0-9]*$')
SPACEWEB_TABLE_FAILED_TESTS_COUNT=$(cat ./spaceweb-table-ci-results.json |  grep -o '"numFailedTestSuites"\ *:\ *[0-9]*' | grep -o '[0-9]*$')

if [ "$SPACEWEB_TABLE_FAILED_TESTS_COUNT" != 0 ]
then
  echo "spaceweb-table - $SPACEWEB_TABLE_FAILED_TESTS_COUNT test(s) failed"
  exit 1
fi

echo "Testing spaceweb-bolt package"
yarn workspace @sprinklr/spaceweb-bolt test --json --outputFile=../../spaceweb-bolt-ci-results.json
SPACEWEB_BOLT_TESTS_COUNT=$(cat ./spaceweb-bolt-ci-results.json |  grep -o '"numTotalTests"\ *:\ *[0-9]*' | grep -o '[0-9]*$')
SPACEWEB_BOLT_FAILED_TESTS_COUNT=$(cat ./spaceweb-bolt-ci-results.json |  grep -o '"numFailedTestSuites"\ *:\ *[0-9]*' | grep -o '[0-9]*$')

if [ "$SPACEWEB_BOLT_FAILED_TESTS_COUNT" != 0 ]
then
  echo "spaceweb-table - $SPACEWEB_BOLT_FAILED_TESTS_COUNT test(s) failed"
  exit 1
fi


echo "spaceweb Total Tests - $SPACEWEB_TESTS_COUNT"
echo "spaceweb-form Total Tests - $SPACEWEB_FORM_TESTS_COUNT"
echo "spaceweb-charts Total Tests - $SPACEWEB_CHARTS_TESTS_COUNT"
echo "spaceweb-editor Total Tests - $SPACEWEB_EDITOR_TESTS_COUNT"
echo "spaceweb-meet Total Tests - $SPACEWEB_MEET_TESTS_COUNT"
echo "spaceweb-table Total Tests - $SPACEWEB_TABLE_TESTS_COUNT"
echo "spaceweb-bolt Total Tests - $SPACEWEB_BOLT_TESTS_COUNT"
