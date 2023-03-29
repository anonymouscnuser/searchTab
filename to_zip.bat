setlocal

set extensionName=searchTab
set sourceFolder=searchTab
set targetFolder=%extensionName%

if exist %targetFolder%.zip del %targetFolder%.zip

cd %sourceFolder%
zip -r ../%targetFolder%.zip *
cd ..

echo %targetFolder%.zip created successfully.

endlocal
